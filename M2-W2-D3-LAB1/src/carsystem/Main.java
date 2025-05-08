package carsystem;

public class Main {
    public static void main(String[] args) {
        Car sedan = new Sedan("1HGCM82633A004352", "Honda", "Accord", 45000);
        Car suv = new UtilityVehicle("2T1BURHE1JC048123", "Toyota", "RAV4", 32000, true);
        Car truck = new Truck("3C6UR5FL9JG123456", "Ram", "1500", 58000, 3500.0);

        System.out.println(sedan.getInfo());
        System.out.println(suv.getInfo());
        System.out.println(truck.getInfo());
    }
}