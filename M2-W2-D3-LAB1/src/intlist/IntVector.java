package intlist;

public class IntVector implements IntList {
    private int[] data;
    private int size;

    public IntVector() {
        data = new int[20];
        size = 0;
    }

    @Override
    public void add(int number) {
        if (size == data.length) {
            int newLength = data.length * 2;
            int[] newData = new int[newLength];
            System.arraycopy(data, 0, newData, 0, size);
            data = newData;
        }
        data[size++] = number;
    }

    @Override
    public int get(int id) {
        if (id < 0 || id >= size) {
            throw new IndexOutOfBoundsException("¡Cuidado! Intentas acceder a la posición " + id + ", pero la lista solo tiene " + size + " elementos.");
        }
        return data[id];
    }
}
