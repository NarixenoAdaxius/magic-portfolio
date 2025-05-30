export interface GalleryImage {
  src: string;
  alt: string;
  orientation: 'horizontal' | 'vertical';
}

export interface Gallery {
  images: GalleryImage[];
} 