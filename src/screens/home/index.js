import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {orderCake, restockCake} from '../../redux/actions/cakeActions';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.width = Dimensions.get('window').width;
  }

  handleOrderCake = () => {
    const {pOrderCake} = this.props;
    pOrderCake(1);
    // WAY 1
    // const {dispatch} = this.props;
    // dispatch(orderCake(1));
  };

  handleRestockCake = () => {
    const {pRestockCake} = this.props;
    pRestockCake();
    // const {dispatch} = this.props;
    // dispatch(restockCake());
  };

  render() {
    const {cakeData} = this.props;
    return (
      <View style={styles.vwContainer}>
        <View
          style={[styles.vwContent, {width: this.width && this.width - 32}]}>
          {/* Qty View */}
          <View style={styles.vwItem}>
            <Text>{`${cakeData.numOfCakes}`}</Text>
            <TouchableOpacity
              style={styles.btnItem}
              onPress={this.handleOrderCake}>
              <Text>{'ORDER CAKE'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnItem}
              onPress={this.handleRestockCake}>
              <Text>{'RESTOCK CAKE'}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.vwItexwm}>
            <Text>{`${0}`}</Text>
            <TouchableOpacity style={styles.btnItem} onPress={() => {}}>
              <Text>{'ORDER ICECREAM'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnItem} onPress={() => {}}>
              <Text>{'RESTOCK CAKE'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* <View style={[styles.vwUserContent, {width: this.width - 32}]}>
          <Text>{userData?.users.join(', ')}</Text>
          <TouchableOpacity
            disabled={userData?.loading}
            style={styles.btnItem}
            onPress={onFetchUsersTap}>
            {userData?.loading && (
              <ActivityIndicator
                animating
                size={'small'}
                style={{marginRight: 8}}
              />
            )}
            <Text>{'FETCH USERS'}</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  }
}

// const mapStateToProps = state => {
//   console.log(state.cakeData);
//   return {
//     cakeData: state.cakeData,
//   };
// };

// const mapDispatchToProps = {
//   pOrderCake: orderCake,
//   pRestockCake: restockCake,
// };

const mapStateToProps = state => {
  return {
    cakeData: state.cakeReducer,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     pOrderCake: val => dispatch(orderCake(val)),
//     pRestockCake: () => dispatch(restockCake()),
//   };
// };
const mapDispatchToProps = {
  pOrderCake: orderCake,
  pRestockCake: restockCake,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  vwContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  vwContent: {
    flexDirection: 'row',
    width: '100%',
    marginHorizontal: 16,
    backgroundColor: 'red',
    justifyContent: 'space-between',
    padding: 16,
  },
  vwUserContent: {
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: 'red',
  },
  vwItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnItem: {
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 4,
    marginTop: 8,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
