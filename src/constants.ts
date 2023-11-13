import { Dimensions } from 'react-native';

const { width: PAGE_WIDTH, height: PAGE_HEIGHT } = Dimensions.get('window');
const CIRCLE_WIDTH = PAGE_WIDTH * 0.7;

export { PAGE_HEIGHT, PAGE_WIDTH, CIRCLE_WIDTH };
