import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsAccordion extends Struct.ComponentSchema {
  collectionName: 'components_components_accordions';
  info: {
    displayName: 'Accordion';
    icon: 'bulletList';
  };
  attributes: {
    copy: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
  };
}

export interface ComponentsCard extends Struct.ComponentSchema {
  collectionName: 'components_components_cards';
  info: {
    displayName: 'Card';
    icon: 'layout';
  };
  attributes: {
    copy: Schema.Attribute.Text;
    ctas: Schema.Attribute.Component<'components.ct-as', false>;
    heading: Schema.Attribute.String;
    subheading: Schema.Attribute.String;
    thumbnail: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ComponentsClinic extends Struct.ComponentSchema {
  collectionName: 'components_components_clinics';
  info: {
    displayName: 'clinic';
    icon: 'house';
  };
  attributes: {
    address: Schema.Attribute.Text;
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    bookingUrl: Schema.Attribute.String;
    copy: Schema.Attribute.String;
    mapImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    mapUrl: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

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

export interface CompositesAccordions extends Struct.ComponentSchema {
  collectionName: 'components_composites_accordions';
  info: {
    displayName: 'Accordions';
    icon: 'bulletList';
  };
  attributes: {
    accordion: Schema.Attribute.Component<'components.accordion', true>;
    heading: Schema.Attribute.String;
  };
}

export interface CompositesCardDisplay extends Struct.ComponentSchema {
  collectionName: 'components_composites_card_displays';
  info: {
    displayName: 'Card Display';
    icon: 'grid';
  };
  attributes: {
    cards: Schema.Attribute.Component<'components.card', true>;
    heading: Schema.Attribute.String;
    subheading: Schema.Attribute.String;
  };
}

export interface CompositesContactForm extends Struct.ComponentSchema {
  collectionName: 'components_composites_contact_forms';
  info: {
    displayName: 'Contact Form';
    icon: 'paintBrush';
  };
  attributes: {
    copy: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
    subheading: Schema.Attribute.String;
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
    reverseOrder: Schema.Attribute.Boolean;
    subheading: Schema.Attribute.String;
  };
}

export interface CompositesGenericContent extends Struct.ComponentSchema {
  collectionName: 'components_composites_generic_contents';
  info: {
    displayName: 'Generic Content';
    icon: 'filter';
  };
  attributes: {
    copy: Schema.Attribute.Blocks;
    ctas: Schema.Attribute.Component<'components.ct-as', true>;
    heading: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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

export interface CompositesTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_composites_testimonials';
  info: {
    displayName: 'Testimonials';
    icon: 'emotionHappy';
  };
  attributes: {
    heading: Schema.Attribute.String;
    reviews: Schema.Attribute.Relation<'oneToMany', 'api::review.review'>;
    subheading: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.accordion': ComponentsAccordion;
      'components.card': ComponentsCard;
      'components.clinic': ComponentsClinic;
      'components.ct-as': ComponentsCtAs;
      'composites.accordions': CompositesAccordions;
      'composites.card-display': CompositesCardDisplay;
      'composites.contact-form': CompositesContactForm;
      'composites.cta-section': CompositesCtaSection;
      'composites.generic-content': CompositesGenericContent;
      'composites.hero': CompositesHero;
      'composites.testimonials': CompositesTestimonials;
    }
  }
}
