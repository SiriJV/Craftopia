import './result.scss';

type RenderFunction<T> = (searchable: T) => string;

export function renderSearchables<T>(searchable: T, render: RenderFunction<T>, wrapperId: string) {
  const wrapper = document.getElementById(wrapperId) as HTMLElement;
  
  wrapper.innerHTML = "";
  
  wrapper.innerHTML = render(searchable);
}