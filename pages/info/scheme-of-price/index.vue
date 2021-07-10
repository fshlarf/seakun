<template>
  <div>
    <NavbarBlank />
    <div class="pt-24">
      <div class="container">
        <Title title="Bagaimana Seakun.id mengatur harga?" />
        <div class="tn:text-sm md:text-base tn:px-3 md:px-0">
          Dengan konsep patungan, melalui Seakun.id harga Paket Grup dari
          masing-masing provider akan dibagi rata per jumah member dalam suatu
          grup. Sedangkan harga final yang dibayarkan oleh member adalah harga
          patungan yang sudah termasuk biaya admin Seakun.id.
        </div>
        <br />
        <div class="tn:text-sm md:text-base tn:px-3 md:px-0">
          <b>Perlu diperhatikan</b> bahwa harga paket dari provider bisa saja
          tidak bulat, sehingga Seakun.id melakukan pembulatan harga patungan
          dengan tujuan untuk memudahkan member dalam melihat nominal yang akan
          ditransfer. Hasil pembulatan akan masuk sebagai keuntungan untuk
          Seakun.id dan dengan berlangganan melalui Seakun.id, member dinyatakan
          sudah mengerti dan setuju dengan skema harga yang sudah ditetapkan.
        </div>
        <div
          class="mt-8 grid tn:grid-cols-1 lg:grid-cols-2 tn:gap-4 md:gap-6 justify-between"
        >
          <div v-for="(item, index) in providerList" :key="index">
            <div
              class="w-full tn:p-3 md:p-6 xl:mx-2 border tn:shadow rounded-xl"
            >
              <img :src="item.img" alt="image not found" class="h-10" />
              <img
                :src="item.screenshot"
                alt="image not found"
                class="w-full h-full mx-auto my-2"
              />
              <p class="tn:text-lg md:text-lg font-bold my-2">Detail Harga</p>
              <div
                class="flex justify-between items-center space-y-1 tn:text-xs md:text-base"
                v-for="(info, ind) in item.informations"
                :key="ind"
                :class="{ 'font-bold': info.is_total }"
              >
                <div>
                  {{ info.title }}
                </div>
                <div>
                  {{ info.value }}
                </div>
              </div>
              <div class="h-px w-full bg-gray-400 my-2"></div>
              <div>
                <p class="tn:text-lg md:text-lg font-bold my-2">
                  Skema Berlangganan
                </p>
                <ol
                  class="space-y-1 tn:text-xs md:text-base tn:ml-3 md:ml-4 list-decimal list-outside"
                >
                  <li v-for="(scheme, indx) in item.schemes" :key="indx">
                    {{ scheme }}
                  </li>
                </ol>
              </div>
            </div>
          </div>
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
import { providerList } from './provider-list';

export default {
  components: {
    NavbarBlank,
    Footer,
    Title,
  },
  data() {
    return {
      providerList,
    };
  },
};
</script>

<style lang="scss" scoped></style>
