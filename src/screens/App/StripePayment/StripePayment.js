import React, { useEffect, useState, useRef } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import { Secret_key, STRIPE_PUBLISHABLE_KEY } from "./keys";
import { useNavigation } from "@react-navigation/native";
const CURRENCY = "USD";
var CARD_TOKEN = null;
const StripePayment = () => {
  const navigation = useNavigation();
  const [namee, setName] = useState("");
  const [CardInput, setCardInput] = useState("");
  let val = CardInput.slice(CardInput.length - 4);
  const [expiratoinDate, setExpirationDate] = useState("");
  const [backspaceFlag, setBackspaceFlag] = useState(false);
  const [cvc, setcvc] = useState("");
  const [payment, setpayment] = useState(100);

  const process = async () => {
    if (!namee) {
      alert("Please enter your name");
    } else if (!CardInput) {
      alert("Please enter your card number");
    } else if (!cvc) {
      alert("Please enter 3 digit cvc");
    } else if (!expiratoinDate) {
      alert("Please enter expire date");
    } else {
      let creditCardToken;
      try {
        // Create a credit card token
        creditCardToken = await getCreditCardToken(CardInput);
        console.log("creditCardToken", creditCardToken);
        if (creditCardToken.error) {
          alert("saksd");

          return;
        }
      } catch (e) {
        console.log("e", e);
        return;
      }
      // Send a request to your server with the received credit card token
      const { error } = await subscribeUser(creditCardToken);
      // Handle any errors from your server
      if (error) {
        alert(error);
      } else {
        let pament_data = await charges();
        console.log("pament_data", pament_data.status);
        if (pament_data.status == "succeeded") {
          alert("Payment Successfully");
        } else {
          alert("Payment failed");
        }
      }
    }
  };
  function subscribeUser(creditCardToken) {
    return new Promise((resolve) => {
      console.log("Credit card token\n", creditCardToken);
      CARD_TOKEN = creditCardToken.id;
      setTimeout(() => {
        resolve({ status: true });
      }, 1000);
    });
  }
  const handleExpirationDate = (text) => {
    if (backspaceFlag === false) {
      if (text.length == 2) {
        setExpirationDate(text + "/");
        setBackspaceFlag(true);
      } else {
        setExpirationDate(text);
      }
    } else {
      if (text.length == 2) {
        let text2 = expiratoinDate.slice(0, 1);

        setExpirationDate(text2);
        setBackspaceFlag(false);
      } else {
        setExpirationDate(text);
      }
    }
  };
  let datetime = expiratoinDate.split("/");

  function getCreditCardToken(creditCardData) {
    const card = {
      "card[number]": CardInput, //creditCardData.values.number.replace(/ /g, ''),
      "card[exp_month]": datetime[0], //creditCardData.values.expiry.split('/')[0],
      "card[exp_year]": datetime[1], //creditCardData.values.expiry.split('/')[1],
      "card[cvc]": cvc, //creditCardData.values.cvc
    };
    return fetch("https://api.stripe.com/v1/tokens", {
      headers: {
        // Use the correct MIME type for your server
        Accept: "application/json",
        // Use the correct Content Type to send data to Stripe
        "Content-Type": "application/x-www-form-urlencoded",
        // Use the Stripe publishable key as Bearer
        Authorization: `Bearer ${STRIPE_PUBLISHABLE_KEY}`,
      },
      // Use a proper HTTP method
      method: "post",
      // Format the credit card data to a string of key-value pairs
      // divided by &
      body: Object.keys(card)
        .map((key) => key + "=" + card[key])
        .join("&"),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }
  const charges = async () => {
    const card = {
      amount: payment * 100,
      currency: CURRENCY,
      source: CARD_TOKEN,
      description: "Payment for wallet",
    };

    return fetch("https://api.stripe.com/v1/charges", {
      headers: {
        // Use the correct MIME type for your server
        Accept: "application/json",
        // Use the correct Content Type to send data to Stripe
        "Content-Type": "application/x-www-form-urlencoded",
        // Use the Stripe publishable key as Bearer
        Authorization: `Bearer ${Secret_key}`,
      },
      // Use a proper HTTP method
      method: "post",
      // Format the credit card data to a string of key-value pairs
      // divided by &
      body: Object.keys(card)
        .map((key) => key + "=" + card[key])
        .join("&"),
    }).then((response) => response.json());
  };
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View style={{ flex: 1, paddingHorizontal: 15 }}>
        <View style={{ paddingTop: 20 }}>
          <TextInput
            style={{
              height: 50,
              backgroundColor: "white",
              marginTop: 10,
              borderBottomWidth: 1,
              padding: 10,
              marginHorizontal: 10,
            }}
            placeholderTextColor="black"
            color="black"
            value={namee}
            placeholder="Card holder name"
            selectionColor={colors.primary}
            onChangeText={(nam) => setName(nam)}
            theme={{
              colors: { primary: colors.primary },
            }}
          />
          <View
            style={{
              borderBottomWidth: 1,
              height: 50,
              backgroundColor: "white",
              marginTop: 10,
              padding: 10,
              paddingTop: 16,
              marginHorizontal: 10,
            }}
          >
            <Text>{payment}</Text>
          </View>

          <TextInput
            style={{
              height: 50,
              backgroundColor: "white",
              marginTop: 10,
              borderBottomWidth: 1,
              padding: 10,
              marginHorizontal: 10,
            }}
            placeholder="Card number-xxxx xxxxxxxxxxxxxx xx"
            value={CardInput}
            maxLength={16}
            selectionColor={colors.primary}
            onChangeText={(cardno) => setCardInput(cardno)}
            placeholderTextColor="black"
            color="black"
            keyboardType="numeric"
          />

          <TextInput
            style={{
              height: 50,
              backgroundColor: "white",
              marginTop: 10,
              borderBottomWidth: 1,
              padding: 10,
              marginHorizontal: 10,
            }}
            placeholderTextColor="black"
            color="black"
            keyboardType="numeric"
            placeholder="CVC - XXX"
            value={cvc}
            maxLength={3}
            selectionColor={colors.primary}
            onChangeText={(cvc) => setcvc(cvc)}
            theme={{
              colors: { primary: colors.primary },
            }}
          />

          <TextInput
            style={{
              height: 50,
              backgroundColor: "white",
              marginTop: 10,
              borderBottomWidth: 1,
              padding: 10,
              marginHorizontal: 10,
            }}
            placeholderTextColor="black"
            color="black"
            keyboardType="numeric"
            placeholder="MM/YY"
            selectionColor={colors.primary}
            maxLength={5}
            onChangeText={(cvc) => handleExpirationDate(cvc)}
            value={expiratoinDate}
            theme={{
              colors: { primary: colors.primary },
            }}
          />
        </View>
      </View>

      <View
        style={{
          flex: 1,
          marginTop: "40%",
          marginHorizontal: 30,
          marginBottom: 20,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: colors.yellow,
            justifyContent: "center",
            alignItems: "center",
            height: 45,
            borderRadius: 8,
          }}
          onPress={() => process()}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default StripePayment;

const styles = StyleSheet.create({});
