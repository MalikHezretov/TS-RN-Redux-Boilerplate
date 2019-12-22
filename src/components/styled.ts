import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 25px;
`;

export const UpdateButton = styled.TouchableOpacity`
  background-color: #0080ff;
  height: 100px;
  width: 100px;
  position: absolute;
  bottom: 100px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16;
`;
