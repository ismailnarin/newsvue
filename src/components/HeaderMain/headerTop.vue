<template>
  <div class="container">
    <div class="row">
      <div
        class="d-flex flex-column col-sm align-items-start justify-content-center"
      >
        <span class="custom-font-size-13">
          İSTANBUL <b class="fw-bolder">12°C / 9°C</b>
        </span>
        <span class="text-muted custom-font-size-10"
          ><i> Parçalı bulutlu, güneşli </i></span
        >
      </div>
      <div class="col-sm d-flex align-items-center flex-column">
        <div class="star-logo"></div>
        <div class="text-center custom-font-size-10 mt-1">
          {{ date }} / 25 CemaziyelEvvel 1445
        </div>
      </div>
      <div
        class="d-flex flex-column col-sm align-items-end justify-content-center custom-font-size-10"
      >
        <span class="custom-font-size-13">İSTANBUL <b>00:20:59</b> </span>
        <span class="text-muted custom-font-size-10"
          ><i>Yatsı kalan süre</i>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      days: [
        "Pazar",
        "Pazartesi",
        "Salı",
        "Çarşamba",
        "Perşembe",
        "Cuma",
        "Cumartesi",
      ],
      day: new Date(),
      date: "",
    };
  },
  created() {
    const daysName = this.days[this.day.getDay()];
    this.date = `${this.day.getDate()} ${this.day.toLocaleString("default", {
      month: "long",
    })} ${this.day.getFullYear()} ${daysName}`;
  },
};
</script>
