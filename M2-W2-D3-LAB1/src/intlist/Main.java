package intlist;

public class Main {
    public static void main(String[] args) {
        // IntArrayList
        IntList arrayList = new IntArrayList();
        for (int i = 0; i < 15; i++) {
            arrayList.add(i);
        }
        System.out.println("IntArrayList: Agregamos 15 números (del 0 a 14), a un array que inicialmente tiene capacidad para 10 elementos, ¿Qué valor hay en la posición 12? => " + arrayList.get(12));

        // IntVector
        IntList vector = new IntVector();
        for (int i = 0; i < 25; i++) {
            vector.add(i);
        }
        System.out.println("IntVector: Agregamos 25 números (del 0 a 24), a un array que inicialmente tiene capacidad para 20 elementos, ¿Qué valor hay en la posición 17? => " + vector.get(17));
    }
}
