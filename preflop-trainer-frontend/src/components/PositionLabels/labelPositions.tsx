export type PositionLocation = 'player' | 'seat1' | 'seat2' | 'seat3' | 'seat4' | 'seat5';

export const positions: Record<PositionLocation, { bottom: string; left: string }> = {
  player: {bottom: '22vh', left: '46vw'},
  seat1: {bottom: '34vh', left: '12vw'},
  seat2: {bottom: '66vh', left: '12vw'},
  seat3: {bottom: '82vh', left: '46vw'},
  seat4: {bottom: '66vh', left: '80vw'},
  seat5: {bottom: '34vh', left: '80vw'},
};
