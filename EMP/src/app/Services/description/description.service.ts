import { Injectable } from '@angular/core';
import { desc } from 'src/app/Shared/Model/Details';

@Injectable({
  providedIn: 'root'
})
export class DescriptionService {

  constructor() { }

  getAll(): desc[]{
    return[
      {
        name: 'Jacob Jaber',
        position1: 'Co-founder - Philz Coffee',
        position2: 'Investor and Forbes 30 Under 30',
        description: 'Jacob Jaber is the Co-Founder & Chairman of Philz Coffee. As CEO for nearly two decades, Jacob grew Philz from the original coffee shop in San Franciscos Mission District to more than 70 locations across the country.',
        tags: ['Food & beverage startups', 'Getting into big retail', 'Expansion strategies', 'Fundraising'],
        imageUrl: '../../../assets/Images/p1.png'
      },
      {
        name: 'Alexandra Zatarain',
        position1: 'Co-founder - Eight Sleep',
        position2: 'Y Combinator Alum',
        description: 'Alexandra Zatarain is the Co-Founder and Vice President of Brand and Marketing at Eight Sleep, the worlds first sleep fitness company. Eight Sleep solves sleeps most pressing issues through innovation and cutting-edge technology.',
        tags: ['Launching consumer Tech Startups', 'Consumer Acquisition', 'Branding & Marketing', 'Fundraising'],
        imageUrl: '../../../assets/Images/p2.webp'
      },
      {
        name: 'Billy Bosch',
        position1: 'Founder - ICONIC Protein',
        position2: 'CPG Marketing Expert',
        description: 'William (Billy) Bosch is a consumer products entrepreneur with over 10 years of experience launching products, scaling into retail and e-commerce, and raising money. He is most known for founding ICONIC – one of the largest natural protein supplement brands in the United States.',
        tags: ['Launching Consumer Products', 'Getting into Big Retailers', 'Private Equity Fundraising', 'Branding'],
        imageUrl: '../../../assets/Images/p3.webp'
      },
      {
        name: 'Jacob Jaber',
        position1: 'Co-founder - Philz Coffee',
        position2: 'Investor and Forbes 30 Under 30',
        description: 'Jacob Jaber is the Co-Founder & Chairman of Philz Coffee. As CEO for nearly two decades, Jacob grew Philz from the original coffee shop in San Franciscos Mission District to more than 70 locations across the country.',
        tags: ['Food & beverage startups', 'Getting into big retail', 'Expansion strategies', 'Fundraising'],
        imageUrl: '../../../assets/Images/p1.png'
      },
      {
        name: 'Alexandra Zatarain',
        position1: 'Co-founder - Eight Sleep',
        position2: 'Y Combinator Alum',
        description: 'Alexandra Zatarain is the Co-Founder and Vice President of Brand and Marketing at Eight Sleep, the worlds first sleep fitness company. Eight Sleep solves sleeps most pressing issues through innovation and cutting-edge technology.',
        tags: ['Launching consumer Tech Startups', 'Consumer Acquisition', 'Branding & Marketing', 'Fundraising'],
        imageUrl: '../../../assets/Images/p2.webp'
      },
      {
        name: 'Billy Bosch',
        position1: 'Founder - ICONIC Protein',
        position2: 'CPG Marketing Expert',
        description: 'William (Billy) Bosch is a consumer products entrepreneur with over 10 years of experience launching products, scaling into retail and e-commerce, and raising money. He is most known for founding ICONIC – one of the largest natural protein supplement brands in the United States.',
        tags: ['Launching Consumer Products', 'Getting into Big Retailers', 'Private Equity Fundraising', 'Branding'],
        imageUrl: '../../../assets/Images/p3.webp'
      }
    ]
  }
}
