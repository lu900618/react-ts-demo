import * as Fetch from '../utils/request';

export async function getListData() {
  return Fetch.get('URL1');
}

export async function getListItemDetail(id: number) {
  return Fetch.get(
    `URL2/${id}`,
  );
}

