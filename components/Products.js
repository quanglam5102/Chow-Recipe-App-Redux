import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, FlatList, Button } from 'react-native';
import { connect } from 'react-redux';
import { fetchProducts, addToCart, removeFromCart, resetCart } from '../redux/actions/index';

const Products = ({ navigation, route, products, fetchProductsToComponent, cartProducts, addToCart, removeFromCart, resetCart }) => {
  // Fetch Products and store in redux array when the component loads
  React.useEffect(() => {
    fetchProductsToComponent()
  }, [])

  const renderProduct = ({ item }) => {
    return (
      <View>
        <Text>Name: {item.title}</Text>
        <Text>Price: $ {item.price}</Text>
        <Text>Desc: {item.description}</Text>
        <Button title={"Add to Cart"} onPress={() => addToCart(item)} />
        <View style={{ borderBottomColor: 'black', borderWidth: 1, margin: 5 }} />
      </View>
    )
  }

  const renderCartProduct = ({ item }) => {
    return (
      <View>
        <Text>Name: {item.title}</Text>
        <Text>Price: $ {item.price}</Text>
        <Text>Desc: {item.description}</Text>
        <Button title={"Remove from Cart"} onPress={() => removeFromCart(item)} />
        <View style={{ borderBottomColor: 'black', borderWidth: 1, margin: 5 }} />
      </View>
    )
  }


  return (
    <View>
      <Button title="Reset Cart" onPress={() => resetCart()} />
      <Button title="Go to AssetExample Page" onPress={() => {
        navigation.navigate("AssetExample", {message: 'message from Product page'})
      }} />
      <Text>{route?.params?.message ?? undefined ? route.params.message : ""}</Text>
      <Text style={{ fontWeight: "bold", fontSize: 26 }}>Products</Text>
      <FlatList
        style={{ height: '30%' }}
        data={products}
        renderItem={renderProduct}
        />
      <Text style={{ fontWeight: "bold", fontSize: 26 }}>Cart</Text>
      <FlatList
        data={cartProducts}
        renderItem={renderCartProduct}
        />
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.productsReducer.products,
    cartProducts: state.cartReducer.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProductsToComponent: () => fetchProducts(dispatch),
    addToCart: (product) => dispatch(addToCart(product)),
    removeFromCart: (product) => dispatch(removeFromCart(product)),
    resetCart: () => dispatch(resetCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);