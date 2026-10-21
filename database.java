import java.util.ArrayList;
import java.util.List;

public class Database {

    private List<Booking> daftarBooking;
    private List<Pembayaran> daftarPembayaran;
    private List<Sewa> daftarSewa;

    private int nomorBooking;
    private int nomorPembayaran;
    private int nomorSewa;

    public Database() {

        daftarBooking = new ArrayList<>();
        daftarPembayaran = new ArrayList<>();
        daftarSewa = new ArrayList<>();

        nomorBooking = 1;
        nomorPembayaran = 1;
        nomorSewa = 1;
    }

    public int generateIdBooking() {
        return nomorBooking++;
    }

    public int generateIdPembayaran() {
        return nomorPembayaran++;
    }

    public int generateIdSewa() {
        return nomorSewa++;
    }

    public List<Booking> getDaftarBooking() {
        return daftarBooking;
    }

    public List<Pembayaran> getDaftarPembayaran() {
        return daftarPembayaran;
    }

    public List<Sewa> getDaftarSewa() {
        return daftarSewa;
    }
}