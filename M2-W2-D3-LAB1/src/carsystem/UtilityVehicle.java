package carsystem;

public class UtilityVehicle extends Car {
    private boolean fourWheelDrive;

    public UtilityVehicle(String vinNumber, String make, String model, int mileage, boolean fourWheelDrive) {
        super(vinNumber, make, model, mileage);
        this.fourWheelDrive = fourWheelDrive;
    }

    @Override
    public String getInfo() {
        return "Vehículo utilitario - VIN: " + vinNumber + ", Marca: " + make + ", Modelo: " + model +
                ", Kilometraje: " + mileage + " km, Tracción en las cuatro ruedas: " + (fourWheelDrive ? "Sí" : "No");
    }
}