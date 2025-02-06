import './loading-portal.scss';

export function showLoadingPortal(parentId: string) {
  const parentElement = document.getElementById(parentId) as HTMLElement;

  const loadingPortal = document.createElement('li') as HTMLElement;
  loadingPortal.id = "loading-portal";
  parentElement.appendChild(loadingPortal);
}
  
export function hideLoadingPortal() {
  const loadingPortal = document.getElementById('loading-portal') as HTMLElement;
  loadingPortal.remove();
}