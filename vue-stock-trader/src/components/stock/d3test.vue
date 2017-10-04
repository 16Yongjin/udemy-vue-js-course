<template>
  <svg width="300" height="210">
    <g style="transform: translate(0, 10px)">
      <path :d="line" />
    </g>
  </svg>
</template>

<script>
import * as d3 from 'd3';
export default {
    props: ['data'],
  name: 'vue-line-chart',
  data() {
    return {
      line: '',
    };
  },
  mounted() {
    this.calculatePath();
  },
  methods: {
    getScales() {
      const x = d3.scaleTime().range([0, 250]);
      const y = d3.scaleLinear().range([200, 0]);
      d3.axisLeft().scale(x);
      d3.axisBottom().scale(y);
      x.domain(d3.extent(this.data, (d, i) => i));
      y.domain([0, d3.max(this.data, d => d)]);
      return { x, y };
    },
    calculatePath() {
      const scale = this.getScales();
      const path = d3.line()
        .x((d, i) => scale.x(i))
        .y(d => scale.y(d));
      this.line = path(this.data);
    },
  },
  watch: {
      data() {
          this.calculatePath()
      }
  }
};
</script>

<style scoped>
path {
  fill: none;
  stroke: #76BF8A;
  stroke-width: 3px;
}
</style>