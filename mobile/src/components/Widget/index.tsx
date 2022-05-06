import React, { useRef } from 'react';
import {TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';
import { theme } from '../../theme';
import { styles } from './styles';
import BottomSheet from '@gorhom/bottom-sheet';

export function Widget() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  function handleOpen(){
    
  }

  return (
    <>
      <TouchableOpacity style={styles.button}>
        <ChatTeardropDots 
        size={24}
        weight="bold"
        color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>

      <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[1, 280]}
      >

      </BottomSheet>

    </>
  );
}