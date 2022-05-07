import React, { useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';

import { theme } from '../../theme';
import { styles } from './styles';

import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';


import { Success } from '../Success';
import { Options } from '../Options';
import { Form } from '../Form';

import { feedbackTypes } from '../../utils/feedbackTypes';

export type FeeedbackType = keyof typeof feedbackTypes;

function Widget() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  function handleOpen(){
    bottomSheetRef.current?.expand();
  }

  return (
    <>
      <TouchableOpacity
      style={styles.button}
      onPress={handleOpen}
      >
        <ChatTeardropDots 
        size={24}
        weight="bold"
        color={theme.colors.text_on_brand_color}
        />

      </TouchableOpacity>

      <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[0.01, 280]}
      backgroundStyle={styles.modal}
      handleIndicatorStyle={styles.indicator}>
        <Form 
          feedbackType='BUG'
        />
      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);