package carsystem;

public class Sedan extends Car {

    public Sedan(String vinNumber, String make, String model, int mileage) {
        super(vinNumber, make, model, mileage);
    }

    @Override
    public String getInfo() {
        return "Sedan - VIN: " + vinNumber + ", Marca: " + make + ", Modelo: " + model + ", Kilometraje: " + mileage + " km";
    }
}