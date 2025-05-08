package videostreaming;

public class TvSeries extends Video {
    private int episodes;

    public TvSeries(String title, int duration, int episodes) {
        super(title, duration);
        this.episodes = episodes;
    }

    @Override
    public String getInfo() {
        return "Serie de Televisión - Título: " + title + ", Duración de cada episodio: " + duration + " minutos, Número total de episodios: " + episodes;
    }
}
