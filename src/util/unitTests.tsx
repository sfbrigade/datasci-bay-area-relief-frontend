import * as ShallowRenderer from 'react-test-renderer/shallow';

export const shallowRenderToMatchSnapshot = (
    componentInstance: JSX.Element
  ) => {
    const renderer = ShallowRenderer.createRenderer();
  
    renderer.render(componentInstance);
  
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  };