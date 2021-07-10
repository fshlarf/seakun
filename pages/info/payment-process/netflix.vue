<template>
  <div>
    <NavbarBlank />
    <div class="netflix pt-24 tn:px-6 md:px-0">
      <div class="container">
        <Title title="Proses Pendaftaran dan Pembayaran Netflix" />
        <div class="row justify-content-around content-mobile">
          <ul class="list-decimal list-outside space-y-2">
            <li>Buka browser dan akses www.netflix.com</li>
            <li>
              Lakukan Pendaftaran dengan memasukkan alamat email di kolom email
              dan klik "Get Started"
            </li>
            <img
              class="mx-auto !my-6"
              src="/images/netflix-get-started.png"
              alt="Image not found"
            />
            <li>
              Di halaman Step 1, tambahkan password sesuai dengan ketentuan yang
              diinformasikan oleh Admin Seakun, kemudian klik "Continue"
            </li>
            <img
              class="mx-auto !my-6"
              src="/images/netflix-register-1.png"
              alt="Image not found"
            />
            <li>
              Di halaman Step 2, pilih plan sesuai informasi dari Admin Seakun,
              kemudian klik "Continue"
            </li>
            <li>
              Di halaman Step 3, masukkan informasi kartu kredit atau debit
              international kamu. Kemudian centang kotak "I agree" dan klik
              "Star Membership"
            </li>
            <img
              class="mx-auto !my-6"
              src="/images/netflix-register-2.png"
              alt="Image not found"
            />
            <li>
              Jika proses pembayaran berhasil, saldo di kartu kamu akan
              terpotonh sebesar harga plan yang dipiluh dan kamu akan diarahkan
              ke halaman pengaturan profil
            </li>
            <li>
              Isi profil menggunakan nama "Seakun" dan klik "Continue". Lakukan
              pengaturan bahasa dan preferensi (jika muncul)
            </li>
            <li>
              Setelah berada di Home, klik icon profil dan buka halaman Accoung
              > Billing Details (https://www.netflix.com/BillingActivity)
            </li>
            <li>
              Pastikan riwayat pembayaran telah muncul di halaman Billing
              Details
            </li>
            <img
              class="mx-auto !my-6"
              src="/images/netflix-payment-info.png"
              alt="Image not found"
            />
            <li>
              Informasikan ke Admin Seakun bahwa proses pendaftaran dan
              pembayaran telah berhasil. Admin akan melakukan pengecekan dan
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
    Footer,
    Title,
  },
};
</script>

<style lang="scss" scoped></style>
