<template>
  <div>
    <NavbarBlank />
    <div class="spotify pt-24 tn:px-6 md:px-0">
      <div class="container">
        <Title title="Proses Pembayaran di Spotify" />
        <div>
          <ul class="list-decimal list-outside space-y-2">
            <li>Buka browser dan akses www.Spotify.com</li>
            <li>Klik Menu “Masuk”</li>
            <img
              class="mx-auto !my-6"
              src="/images/spotify-home.png"
              alt="Image not found"
            />
            <li>Login menggunakan akun yg diberikan admin Seakun</li>
            <img
              class="mx-auto !my-6"
              src="/images/spotify-login.png"
              alt="Image not found"
            />
            <li>Pilih Akun</li>
            <img
              class="mx-auto !my-6"
              src="/images/spotify-profile.png"
              alt="Image not found"
            />
            <li>Klik Gabung Premium</li>
            <img
              class="mx-auto !my-6"
              src="/images/spotify-dashboard.png"
              alt="Image not found"
            />
            <li>
              Ubah paket jika terpilih paket personal dengan cara klik “Ubah
              Paket”
            </li>
            <img
              class="mx-auto !my-6"
              src="/images/spotify-premium.png"
              alt="Image not found"
            />
            <li>Pilih Paket “Family” dan klik “Memulai”</li>
            <img
              class="mx-auto !my-6"
              src="/images/spotify-info.png"
              alt="Image not found"
            />
            <li>Klik “Pakai Gopay, DANA”</li>
            <img
              class="mx-auto !my-6"
              src="/images/spotify-payment.png"
              alt="Image not found"
            />
            <li>Lakukan pembayaran menggunakan Gopay/DANA milik kamu</li>
            <li>Kirim bukti berhasil payment ke admin (Screenshot)</li>
            <li>
              Logout akun tersebut. Admin akan melakukan pengecekan dan
              pengaturan lebih lanjut terhadap akun yang didaftarkan
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavbarBlank from '~/components/mollecules/NavbarBlank';
import Footer from '~/components/mollecules/Footer';
import Title from '~/components/atoms/Title';

export default {
  components: {
    NavbarBlank,
    Title,
    Footer,
  },
};
</script>

<style lang="scss" scoped></style>
