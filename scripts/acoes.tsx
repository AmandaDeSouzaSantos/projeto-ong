
export type ImageItem = {
  id?: number;
  name?: string;
  url: string;
};

export const getAcoesImages = async (): Promise<ImageItem[]> => {
  try {
    const response = await fetch("http://localhost:3001/api/images"); // Substitua pelo seu IP
    const data = await response.json();
    console.log(data);
    return data; 
  } catch (error) {
    console.error("Erro ao buscar imagens:", error);
    return [];
  }
};
