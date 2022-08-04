import { theme } from "@chakra-ui/react";

export const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime" as "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2011-10-05T00:00:00.000Z",
      "2011-10-06T00:00:00.000Z",
      "2011-10-07T00:00:00.000Z",
      "2011-10-08T00:00:00.000Z",
      "2011-10-09T00:00:00.000Z",
      "2011-10-10T00:00:00.000Z",
      "2011-10-11T00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

export const series = [
  {
    name: "series1",
    data: [123, 23, 45, 67, 12, 45, 12],
  },
];
