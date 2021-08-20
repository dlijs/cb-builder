const FILTER_DATA = [
  { label: '已确认', value: '1' },
  { label: '未确认', value: '2' },
];
const STATUS_OBJ = {
  unconfirmed: {
    color: '#F57E76',
    bgColor: '#FFDCDC',
    statusCdText: '未确认',
  },
  confirmed: {
    color: '#0089FF',
    bgColor: '#DBF0FF',
    statusCdText: '已确认',
  },
};
export { FILTER_DATA, STATUS_OBJ };
