import org.springframework.stereotype.Service;
import javax.annotation.PostConstruct;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.Unmarshaller;
import java.io.InputStream;
import java.util.List;

@Service
public class CountryService {

    private List<Country> countryList;

    @PostConstruct
    public void loadCountries() throws Exception {
        JAXBContext context = JAXBContext.newInstance(CountryList.class);
        Unmarshaller unmarshaller = context.createUnmarshaller();
        InputStream is = getClass().getResourceAsStream("/country.xml");
        CountryList countries = (CountryList) unmarshaller.unmarshal(is);
        this.countryList = countries.getCountries();
    }

    public Country getCountry(String code) {
        return countryList.stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElse(null);
    }
}
