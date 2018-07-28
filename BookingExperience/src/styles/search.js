import { Dimensions } from 'react-native';
let { width, height } = Dimensions.get('window');
console.log();

const styles = {
  parent: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'rgba(246, 247, 249, 1)',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  searchImage: {
    width: 25,
    height: 30
  },
  firstChild: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '90%',
    justifyContent: 'space-between',
    paddingBottom: 10
  },
  input: {
    paddingLeft: 10,
    fontSize: 26,
    fontWeight: 'bold',
    color: 'rgba(48, 55, 64, 1)',
    width: '100%'
  },
  divider: {
    width: '90%',

    paddingBottom: 10
  },
  calenderStyle: {
    width: width - 30,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'white',
    backgroundColor: 'white'
  }
};

export default styles;
