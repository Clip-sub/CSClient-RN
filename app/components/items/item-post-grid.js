/**
 * @flow
 */
"use strict";
import React, { Component, PropTypes } from "react";
import { Dimensions } from "react-native";
import { Card } from "native-base";

const ItemPostGrid = (props) => {
  const { dispatch, title, authorName, image, excerpt, commentCount } = props;

  return (
    <Card>
      <CardItem header>
        <Left>
          <H3>{he.unescape(title)}</H3>
        </Left>
      </CardItem>
      <TouchableOpacity>
        <View
          style={styles.author}>
          <Thumbnail
            small
            source={{ uri: "https://unsplash.it/80/80?random" }} />
          <Text style={styles.authorName}>
            {authorName}
          </Text>
        </View>
      </TouchableOpacity>
      <CardItem cardBody>
        <Body>
          <Image
            source={{ uri: image }}
            style={styles.thumbnailImage}
          />
        </Body>
      </CardItem>
      <CardItem>
        <HTMLView value={excerpt.trim()} />
      </CardItem>
      <CardItem
        style={styles.cardBottom}>
        <Button transparent onPress={() => dispatch(navigate("Profile"))}>
          <Icon name="chatbubbles" />
          <Text>{commentCount}</Text>
        </Button>
        <Button transparent>
          <Icon name="md-share" />
          <Text>{I18n.t("share")}</Text>
        </Button>
      </CardItem>
    </Card>
  )
}