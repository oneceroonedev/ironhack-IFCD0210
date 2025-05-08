package videostreaming;

public class Main {
    public static void main(String[] args) {
        Video tvSerie = new TvSeries("Los hombres de Paco", 70, 133);
        Video movie = new Movie("Time is up", 108, 4.2);

        System.out.println(tvSerie.getInfo());
        System.out.println(movie.getInfo());
    }
}
