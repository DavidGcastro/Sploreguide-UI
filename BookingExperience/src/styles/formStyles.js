import {Dimensions} from 'react-native';
let width = Dimensions.get('window');

let formStyles = {
  parent: { width: '80%', justifyContent: 'space-between' },
  formText: {
    fontSize: 13,
    paddingBottom: 8,
    color: 'rgba(132, 146, 166, 1)'
  },
  inputIconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 5,
    borderBottomColor: 'rgba(237, 237, 237, 1)'
  },
  inputIconContainerHalf: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 5,
    borderBottomColor: 'rgba(237, 237, 237, 1)',
    width: width / 2 - 80
  },
  iconStyles: {
    paddingRight: 10,
    color: 'rgba(132, 146, 166, 1)'
  }
};

export default formStyles;
