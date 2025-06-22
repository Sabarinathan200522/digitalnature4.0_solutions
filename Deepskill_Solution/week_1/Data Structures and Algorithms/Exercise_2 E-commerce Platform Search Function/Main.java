import java.util.*;

class Product {
    int productId;
    String productName;
    String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    @Override
    public String toString() {
        return "[" + productId + ", " + productName + ", " + category + "]";
    }
}

public class Main {
    public static Product linearSearch(Product[] products, int targetId) {
        for (Product product : products) {
            if (product.productId == targetId) {
                return product;
            }
        }
        return null;
    }
    public static Product binarySearch(Product[] products, int targetId) {
        int low = 0, high = products.length - 1;
        while (low <= high) {
            int mid = (low + high) / 2;
            if (products[mid].productId == targetId) {
                return products[mid];
            } else if (products[mid].productId < targetId) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product(105, "Laptop", "Electronics"),
            new Product(101, "Shampoo", "Personal Care"),
            new Product(103, "T-shirt", "Clothing"),
            new Product(102, "Headphones", "Electronics"),
            new Product(104, "Notebook", "Stationery")
        };
        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));

        int searchId = 103;

        Product resultLinear = linearSearch(products, searchId);
        System.out.println("Linear Search Result: " + (resultLinear != null ? resultLinear : "Product not found"));

        Product resultBinary = binarySearch(products, searchId);
        System.out.println("Binary Search Result: " + (resultBinary != null ? resultBinary : "Product not found"));
    }
}
