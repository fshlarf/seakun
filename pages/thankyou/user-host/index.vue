<template>
  <div class="payment">
    <div class="container">
      <div>
        <div
          class="md:bg-white tn:mt-12 tn:-mb-12 md:mb-0 md:mt-24 md:rounded-2xl md:shadow-xl tn:p-4 tn:py-8 md:p-12 text-center"
        >
          <div class="md:w-3/5 mx-auto">
            <img
              class="w-full"
              src="/images/thank-you.png"
              alt="Image not found"
            />
          </div>
          <h3 class="text-2xl font-bold mt-10 text-center">Thank You!</h3>

          <p class="mt-8 md:w-4/5 lg:w-3/5 mx-auto">
            User Host adalah program Seakun.id untuk memberikan kewenangan ke
            user untuk melakukan administrasi ke provider tertentu. Administrasi
            tersebut bisa berupa pendaftaran atau melakukan payment ke provider
            tersebut.
          </p>

          <p class="my-8 md:w-4/5 lg:w-3/5 mx-auto">
            Terima kasih telah melakukan pendaftaran.
            <br />Karena kamu terdaftar sebagai User Host, Admin Seakun.id akan
            memandu kamu untuk melakukan proses
            {{
              provider === 'youtube'
                ? 'pendaftaran menggunakan nomor ponsel yang kamu miliki'
                : 'payment'
            }}
            ke {{ setNameProvider(provider) }}.
          </p>
          <p class="my-6 font-bold text-blue-500">
            <a href="/info/user-host" target="_blank">
              <i>Baca ketentuan User Host selengkapnya</i>
            </a>
          </p>
          <div
            class="md:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto border-primary rounded p-6 space-y-1"
          >
            <div class="grid grid-cols-5">
              <div class="text-left font-bold">Provider</div>
              <div>:</div>
              <div class="col-span-3 text-left">
                {{ setNameProvider(provider) }}
              </div>
            </div>
            <div class="grid grid-cols-5">
              <div class="text-left font-bold">Paket</div>
              <div>:</div>
              <div class="col-span-3 text-left">{{ packet }}</div>
            </div>
            <div class="grid grid-cols-5">
              <div class="text-left font-bold">Harga</div>
              <div>:</div>
              <div class="col-span-3 text-left">
                {{ formatMoneyRupiah(total) }}
              </div>
            </div>
          </div>
          <p class="md:w-4/5 lg:w-3/5 mx-auto mt-6">
            Pastikan nomor Whatsapp kamu aktif, kamu akan dihubungi oleh Admin
            melalui Whatsapp untuk proses selanjutnya.
            <br />
            <br />Hubungi Admin di
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
  name: 'UserHostPage',
  layout: 'new',
  data() {
    return {
      provider: '',
      packet: '',
      packetId: null,
      total: '',
      vouchersData: [],
    };
  },
  mounted() {
    this.getPaymentDetail();
    this.getVouchersData();
  },
  methods: {
    getPaymentDetail() {
      const {
        provider,
        packet_id,
        voucher,
      } = this.$router.history.current.query;
      this.provider = provider;

      axios
        .get(
          `https://seakun-packet-api-v2.herokuapp.com/${provider.toLowerCase()}/${packet_id}`
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
      if (num) {
        return `Rp${num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`;
      } else if (num == 0) {
        return `Rp${num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`;
      }
    },
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
  },
};
</script>

<style lang="scss" scoped>
// .payment {
//   padding: 30px 40px 10px !important;

//   .container {
//     background: white;
//     border-radius: 10px;
//     box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
//   }
//   .box {
//     border: 1px solid #86d0c1;
//     border-radius: 4px;
//     padding: 16px;
//     max-width: 29rem;
//     margin: 0 auto;
//   }
//   .col {
//     text-align: center;
//     &.box {
//       &-title {
//         text-align: left;
//         font-weight: 700;
//         max-width: 7rem;
//       }
//       &-item {
//         text-align: left;
//         &-noRek {
//           cursor: pointer;
//           text-align: left;
//           &:hover {
//             color: #86d0c1;
//           }
//         }
//       }
//     }
//     h3 {
//       margin-top: 20px !important;
//       margin-bottom: 20px !important;
//       font-weight: 700;
//     }
//     p {
//       margin: 0 auto;
//       max-width: 600px;
//       margin-top: 30px;
//       margin-bottom: 40px;
//     }
//     a {
//       font-weight: 700;
//       color: #2895ff;
//     }
//   }
//   .container {
//     max-width: 1120px !important;
//     font-weight: 500 !important;
//     margin: 0 auto !important;
//   }
//   &__img {
//     img {
//       width: 40rem;
//     }
//   }
//   .row {
//     padding: 0px 8px !important;
//   }
//   #snackbar {
//     background-color: #daeeef;
//     color: #2f524b;
//     text-align: center;
//     border-radius: 4px;
//     padding: 16px;
//     position: fixed;
//     z-index: 1;
//     top: 100px;
//     font-size: 17px;
//     margin: 0 auto;
//     max-width: 600px;
//     left: 65%;
//     margin-left: -300px;
//     font-weight: 400;
//     display: grid;
//     button {
//       margin-top: 0px !important;
//       margin-bottom: 10px !important;
//     }
//     span {
//       font-size: 28px;
//       font-weight: 700;
//       cursor: pointer;
//       padding: 0px 12px;
//     }
//   }
// }
// @media (max-width: 800px) {
//   #snackbar {
//     position: absolute !important;
//     max-width: 200px !important;
//     left: 30% !important;
//     top: 60% !important;
//     margin-left: 0px !important;
//   }
//   .payment {
//     padding: 50px 0px 0px !important;
//     // margin-top: 18px;
//     Ï &__img {
//       text-align: center;
//       margin-top: 20px;
//     }
//     &__header {
//       &-h3 {
//         font-size: 22px;
//         margin-top: 16px;
//       }
//     }
//     img {
//       width: 330px !important;
//       margin: 16px auto;
//     }
//     h2 {
//       font-size: 20px;
//     }
//     .box {
//       margin-left: 0px !important;
//       margin-right: 0px !important;
//       font-size: 13px;
//     }
//     .col-lg-1 {
//       max-width: 10px;
//     }
//   }
// }
// @media only screen and (min-width: 880px) and (max-width: 1020px) {
//   .container {
//     display: contents !important;
//   }
// }
</style>
