import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsCtAs extends Struct.ComponentSchema {
  collectionName: 'components_components_ct_as';
  info: {
    displayName: 'CTAs';
    icon: 'cursor';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
    target: Schema.Attribute.Boolean;
    variant: Schema.Attribute.Enumeration<['primary', 'secondary', 'inline']>;
  };
}

export interface CompositesCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_composites_cta_sections';
  info: {
    displayName: 'CTA Section';
    icon: 'dashboard';
  };
  attributes: {
    copy: Schema.Attribute.Blocks;
    ctas: Schema.Attribute.Component<'components.ct-as', true>;
    heading: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'videos'>;
    subheading: Schema.Attribute.String;
  };
}

export interface CompositesHero extends Struct.ComponentSchema {
  collectionName: 'components_composites_heroes';
  info: {
    displayName: 'Hero';
    icon: 'dashboard';
  };
  attributes: {
    copy: Schema.Attribute.String;
    ctas: Schema.Attribute.Component<'components.ct-as', true>;
    heading: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'videos'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.ct-as': ComponentsCtAs;
      'composites.cta-section': CompositesCtaSection;
      'composites.hero': CompositesHero;
    }
  }
}
