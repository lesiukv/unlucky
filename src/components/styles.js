import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  navigationContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  footerNavigation: {
    padding: "0 10px",
  },
  footerContainer: {
    display: "flex !important",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 0",
  },
  gridContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  showMore: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  },
  cardTitle: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  },
  offset: {
    ...theme.mixins.toolbar,
    flexGrow: 1,
  },
  searchBarContainer: {
    justifyContent: "center",
    margin: "20px 0",
  },
  cryptoCurrencyContainer: {
    margin: "20px 0px",
  },
  searchBarInput: {
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  newsTitle: {
    margin: "0px 15px 15px 0px",
  },
  provider: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    alignItems: 'center'
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginTop: '10px'
  },
  blockTitle: {
    margin: '20px 0px 10px 0px !important'
  },
  datePublished: {
    margin: '20px 0px !important'
  },
  cryptoDetails: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
  },
}));
