/**
 * @flow
 */
"use strict";
import React, {PropTypes} from "react";
import {Image, TouchableOpacity, Easing} from "react-native";
import {Body, Button, Card, CardItem, H3, Icon, Left, Text, Thumbnail, View} from "native-base";
import I18n from "../../localizations/I18n";
import he from "he";
import HTMLView from "react-native-htmlview";
import ZoomImage from "react-native-zoom-image";

import {navigate} from "../../actions/actions-navigation";

/**
 * Basic needs for item:
 * title
 * title_plain
 * type: post
 * url
 * excerpt
 * id
 * categories: description / id / parent / post_count / slug / title
 * author: description / name / nickname / slug / id
 * comment_count
 * comment_status
 * comments
 * custom_fields: onesignal_meta_box_present / onesignal_send_notification
 * date: like 2017-02-22 00:11:14
 * modified
 * slug
 * status: publish
 * tags: description / id / post_count / slug / title
 */
const ItemPostCard = (props) => {
  const {dispatch, title, authorName, image, excerpt, commentCount} = props;

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
            source={{uri: "https://unsplash.it/80/80?random"}}
          />
          <Text style={styles.authorName}>
            {authorName}
          </Text>
        </View>
      </TouchableOpacity>
      <CardItem cardBody>
        <Body>
<ZoomImage
  source={{uri: 'https://puu.sh/uNgpt/dd7659da05.jpg'}}
  imgStyle={{width: 500, height: 500}}
  style={styles.img}
  duration={200}
  enableScaling={true}
  easingFunc={Easing.ease}
/>
        <Image
          source={{uri: "https://puu.sh/uNgpt/dd7659da05.jpg"/*image*/}}
          style={styles.thumbnailImage}
        />
        </Body>
      </CardItem>
      <CardItem>
        <HTMLView value={excerpt.trim()}/>
      </CardItem>
      <CardItem
        style={styles.cardBottom}>
        <Button transparent onPress={() => dispatch(navigate("Profile"))}>
          <Icon name="chatbubbles"/>
          <Text>{commentCount}</Text>
        </Button>
        <Button transparent>
          <Icon name="md-share"/>
          <Text>{I18n.t("share")}</Text>
        </Button>
      </CardItem>
    </Card>
  )
};

ItemPostCard.defaultProps = {
  title: "",
  excerpt: "",
  commentCount: 0,
  slug: "",
  id: 0,
  authorName: "",
  authorId: 0,
  thumbnailImage: {}
};

ItemPostCard.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired,
  slug: PropTypes.string,
  id: PropTypes.number.isRequired,
  authorName: PropTypes.string.isRequired,
  authorId: PropTypes.number.isRequired,
  thumbnailImage: PropTypes.object.isRequired
};

export {ItemPostCard};

const styles = {
  thumbnailImage: {
    flex: 1,
    alignSelf: "stretch",
    height: 160
  },
  author: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginLeft: 16
  },
  authorName: {
    marginLeft: 12
  },
  cardBottom: {
    justifyContent: "space-around",
    borderTopWidth: 0.5,
    borderTopColor: "#eee"
  }
};
