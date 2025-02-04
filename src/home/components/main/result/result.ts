import './result.scss';

type RenderFunction<T> = (data: T) => string;

export function displayContent<T>(data: T, render: RenderFunction<T>, wrapperId: string) {
    const wrapper = document.getElementById(wrapperId) as HTMLElement;
  
    wrapper.innerHTML = "";
  
    wrapper.innerHTML = render(data);
  }