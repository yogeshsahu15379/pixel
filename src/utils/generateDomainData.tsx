function generateDomainData(input: string) {
    const tlds = [".com", ".xyz", ".app"];
    const variations = [
      input, `${input}ji`, `${input}hub`, `go${input}`, `the${input}`,
      `${input}pro`, `${input}dev`, `${input}world`, `${input}online`,
      `${input}store`, `${input}app`, `${input}tech`, `${input}zone`
    ];
  
    const featuresList = [
      ["Free WHOIS Privacy", "SSL Certificate", "24/7 Support"],
      ["Premium DNS", "Domain Locking", "Email Forwarding"],
      ["Free Email Forwarding", "Domain Forwarding", "DNS Management"],
      ["AI-Based Features", "Cloud Integration", "Auto Updates"],
      ["E-commerce Ready", "Social Media Integration", "Fast Checkout"]
    ];
  
    const domains: {
        domain: string; price: number; availability: string;
        registration_period: string; renewal_price: number; features: string[];
    }[] = [];
  
    variations.forEach((variant) => {
      tlds.forEach((tld) => {
        const randomPrice = (Math.random() * (50 - 10) + 10).toFixed(2);
        const renewalPrice = (parseFloat(randomPrice) + Math.random() * 5).toFixed(2);
        const randomFeatures = featuresList[Math.floor(Math.random() * featuresList.length)];
  
        domains.push({
          domain: `${variant}${tld}`,
          price: parseFloat(randomPrice),
          availability: Math.random() > 0.5 ? "Available" : "Unavailable",
          registration_period: "1 Year",
          renewal_price: parseFloat(renewalPrice),
          features: randomFeatures
        });
      });
    });
  
    return domains;
  }
  
 export default generateDomainData;
  