<template>
  <div class="payment">
    <div class="container">
      <div class="row">
        <div
          class="col md:bg-white tn:mt-12 tn:-mb-12 md:mb-0 md:mt-24 md:rounded-2xl md:shadow-xl tn:p-4 tn:py-8 md:p-12 text-center"
        >
          <div class="payment__img md:w-3/5 mx-auto">
            <img
              class="w-full"
              src="/images/thank-you.png"
              alt="Image not found"
            />
          </div>
          <h3 class="payment-thankyou text-2xl font-bold mt-10 text-center">
            Thank You!
          </h3>

          <p class="my-8 md:w-3/5 mx-auto">
            Terima kasih telah melakukan pendaftaran.
            <br />Paket ini adalah paket Pre-Order dimana akun akan dibuat
            setelah member dalam satu grup telah terkumpul
            {{ setNumberMember(provider) }} orang.
          </p>
          <div
            class="box md:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto border-primary rounded p-6"
          >
            <div class="grid grid-cols-5">
              <div class="col box-title text-left font-bold">Provider</div>
              <div class="col col-lg-1">:</div>
              <div class="col box-item col-span-3 text-left">
                {{ setNameProvider(provider) }}
              </div>
            </div>
            <div class="grid grid-cols-5 mt-1">
              <div class="col box-title text-left font-bold">Paket</div>
              <div class="col col-lg-1">:</div>
              <div class="col box-item col-span-3 text-left">{{ packet }}</div>
            </div>
            <div class="grid grid-cols-5 mt-1">
              <div class="col box-title text-left font-bold">Harga</div>
              <div class="col col-lg-1">:</div>
              <div class="col box-item col-span-3 text-left">
                {{ formatMoneyRupiah(total) }}
              </div>
            </div>
          </div>
          <p class="my-6 font-bold text-blue-500">
            <a href="/info/pre-order" target="_blank">
              <i>Baca ketentuan Pre-Order selengkapnya</i>
            </a>
          </p>
          <p class="md:w-3/5 mx-auto">
            Pembayaran akan dilakukan setelah satu grup full dan akun berhasil
            dibuat.
            <br />
            <br />
            Pastikan nomor Whatsapp kamu aktif, kamu akan dihubungi oleh Admin
            melalui Whatsapp untuk proses selanjutnya.
            <br />Hubungi Admin
            <a
              class="font-bold text-blue-500"
              href="https://api.whatsapp.com/send?phone=6282124852227"
              >+6282124852227</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PreOrderPage',
  layout: 'new',
  data() {
    return {
      provider: '',
      packet: '',
      total: '',
    };
  },
  mounted() {
    this.getDataPacket();
    this.getVouchersData();
  },
  methods: {
    setNameProvider(provider) {
      switch (provider) {
        case 'netflix':
          return 'Netflix';
          break;
        case 'spotify':
          return 'Spotify';
          break;
        case 'youtube':
          return 'Youtube';
          break;
        case 'gramedia':
          return 'Gramedia';
          break;
        case 'microsoft':
          return 'Microsoft 365';
          break;
        case 'microsoft365':
          return 'Microsoft 365';
          break;
        case 'canva':
          return 'Canva';
          break;
        case 'disney-hotstar':
          return 'Disney+ Hotstar';
          break;
        case 'nintendo':
          return 'Nintendo Switch';
          break;
      }
    },
    setNumberMember(provider) {
      switch (provider.toLowerCase()) {
        case 'canva':
          return '9';
          break;
        case 'gramedia':
          return '2';
          break;
        case 'disney-hotstar':
          return '2';
          break;
        default:
          return '5';
      }
    },
    getDataPacket() {
      const {
        provider,
        packet_id,
        voucher,
      } = this.$router.history.current.query;
      this.provider = provider === 'microsoft' ? 'microsoft365' : provider;
      axios
        .get(
          `https://seakun-packet-api-v2.herokuapp.com/${this.provider.toLowerCase()}/${packet_id}`
        )
        .then((res) => {
          const { data, status } = res;
          if (status === 200) {
            this.packet = data.name;
            this.packetId = data.id;
            if (voucher) {
              setTimeout(() => {
                this.checkValidVoucher(this.vouchersData, data, voucher);
              }, 500);
            } else {
              this.total = data.grandTotal;
            }
          }
        })
        .catch((err) => console.log(err));
    },
    getVouchersData() {
      axios
        .get('https://seakun-packet-api-v2.herokuapp.com/vouchers')
        .then((res) => {
          this.vouchersData = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    checkValidVoucher(vouchersData, dataPacket, voucher) {
      let validateArray = [];
      vouchersData.map((e) => {
        e.voucher_code == voucher.toLowerCase() && e.active
          ? validateArray.push(1)
          : validateArray.push(0);
      });
      validateArray.sort().reverse();
      validateArray[0] == 1
        ? (this.total = dataPacket.voucherGrandTotal)
        : (this.total = dataPacket.grandTotal);
    },
    formatMoneyRupiah(num) {
      return num && num > 0
        ? `Rp${num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`
        : 'Rp0';
    },
  },
};
</script>

<style lang="scss" scoped></style>
