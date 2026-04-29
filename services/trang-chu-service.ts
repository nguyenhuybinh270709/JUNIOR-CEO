import { fetchGraphQL } from "@/lib/graphql-client";

export interface TrangChuData {
  pageBy: {
    title: string;
    trangchu: {
      item1: string;
      item2: string;
      item3: string;
      item4: string;
      item5: {
        icon: string;
        text1: string;
        text2: string;
      };
      item6: {
        icon: string;
        text1: string;
        text2: string;
      };
      item7: {
        icon: string;
        text1: string;
        text2: string;
      };
      item8: {
        label: string;
        endpoint: string;
      };
      item9: {
        label: string;
        endpoint: string;
      };
      item10: {
        image: {
          node: {
            sourceUrl: string;
            altText: string;
          };
        };
        text: string;
      };
      item11: {
        node: {
          sourceUrl: string;
          altText: string;
        };
      };
      item12: {
        node: {
          sourceUrl: string;
          altText: string;
        };
      };
      item13: {
        icon: string;
        text1: string;
        text2: string;
      };
      item14: {
        icon: string;
        text1: string;
        text2: string;
      };
      item15: {
        icon: string;
        text1: string;
        text2: string;
      };
      item16: {
        icon: string;
        text1: string;
        text2: string;
      };
      item17: string;
      item18: {
        icon: string;
        text1: string;
        text2: string;
      };
      item19: {
        icon: string;
        text1: string;
        text2: string;
      };
      item20: {
        icon: string;
        text1: string;
        text2: string;
      };
      item21: {
        icon: string;
        text1: string;
        text2: string;
      };
      item22: {
        node: {
          sourceUrl: string;
          altText: string;
        };
      };
      item23: string;
      item24: {
        icon: string;
        text: string;
      };
      item25: {
        icon: string;
        text: string;
      };
      item26: {
        icon: string;
        text: string;
      };
      item27: {
        icon: string;
        text: string;
      };
      item28: {
        icon: string;
        text: string;
      };
      item29: {
        icon: string;
        text: string;
      };
      item30: {
        icon: string;
        text: string;
      };
      item31: string;
      item32: {
        icon: string;
        label: string;
        text: string;
      };
      item33: {
        icon: string;
        label: string;
        text: string;
      };
      item34: {
        icon: string;
        label: string;
        text: string;
      };
      item35: {
        textLeft: string;
        textMiddle: string;
        textRight: string;
      };
      item36: {
        image: {
          node: {
            sourceUrl: string;
            altText: string;
          };
        };
        label: string;
        subLabel: string;
        text: string;
      };
      item37: {
        label: string;
        subLabel: string;
        text: string;
      };
      item38: {
        image: {
          node: {
            sourceUrl: string;
            altText: string;
          };
        };
        label: string;
        subLabel: string;
        text: string;
      };
      item39: {
        label: string;
        subLabel: string;
        people: {
          person1: {
            avatar: {
              node: {
                sourceUrl: string;
                altText: string;
              };
            };
            name: string;
            role: string;
          };
          person2: {
            avatar: {
              node: {
                sourceUrl: string;
                altText: string;
              };
            };
            name: string;
            role: string;
          };
          person3: {
            avatar: {
              node: {
                sourceUrl: string;
                altText: string;
              };
            };
            name: string;
            role: string;
          };
        };
      };
      item40: {
        image: {
          node: {
            sourceUrl: string;
            altText: string;
          };
        };
        label: string;
        subLabel: string;
        buttonLeft: {
          text: string;
          endpoint: string;
        };
        buttonRight: {
          text: string;
          endpoint: string;
        };
      };
      item41: {
        image: {
          node: {
            sourceUrl: string;
            altText: string;
          };
        };
        content1: {
          icon: string;
          text: string;
        };
        content2: {
          icon: string;
          text: string;
        };
        content3: {
          icon: string;
          text: string;
        };
      };
    };
  };
}

export async function getTrangChu(): Promise<TrangChuData> {
  const query = `
    query {
      pageBy(uri: "trang-chu") {
        title
        trangchu {
          item1
          item2
          item3
          item4
          item5{
            icon
            text1
            text2
          }
          item6{
            icon
            text1
            text2
          }
          item7{
            icon
            text1
            text2
          }
          item8{
            label
            endpoint
          }
          item9{
            label
            endpoint
          }
          item10 {
            image {
              node{
                sourceUrl
                altText
              }
            }
            text
          }
          item11 {
            node{
              sourceUrl
              altText
            }
          }
          item12 {
            node{
              sourceUrl
              altText
            }
          }
          item13 {
            icon
            text1
            text2
          }
          item14 {
            icon
            text1
            text2
          }
          item15 {
            icon
            text1
            text2
          }
          item16 {
            icon
            text1
            text2
          }
          item17
          item18 {
            icon
            text1
            text2
          }
          item19 {
            icon
            text1
            text2
          }
          item20 {
            icon
            text1
            text2
          }
          item21 {
            icon
            text1
            text2
          }
          item22 {
            node{
              sourceUrl
              altText
            }
          }
          item23
          item24{
            icon
            text
          }
          item25{
            icon
            text
          }
          item26{
            icon
            text
          }
          item27{
            icon
            text
          }
          item28{
            icon
            text
          }
          item29{
            icon
            text
          }
          item30{
            icon
            text
          }
          item31
          item32{
            icon
            label
            text
          }
          item33{
            icon
            label
            text
          }
          item34{
            icon
            label
            text
          }
          item35{
            textLeft
            textMiddle
            textRight
          }
          item36{
            image{
              node{
                sourceUrl
                altText
              }
            }
            label
            subLabel
            text
          }
          item37{
            label
            subLabel
            text
          }
          item38{
            image{
              node{
                sourceUrl
                altText
              }
            }
            label
            subLabel
            text
          }
          item39{
            label
            subLabel
            people {
              person1{
                avatar{
                  node{
                    sourceUrl
                    altText
                  }
                }
                name
                role
              }
              person2{
                avatar{
                  node{
                    sourceUrl
                    altText
                  }
                }
                name
                role
              }
              person3{
                avatar{
                  node{
                    sourceUrl
                    altText
                  }
                }
                name
                role
              }
            }
          }
          item40 {
            image{
              node{
                sourceUrl
                altText
              }
            }
            label
            subLabel
            buttonLeft{
              text
              endpoint
            }
            buttonRight{
              text
              endpoint
            }
          }
          item41 {
            image{
              node{
                sourceUrl
                altText
              }
            }
            content1 {
              icon
              text
            }
            content2 {
              icon
              text
            }
            content3 {
              icon
              text
            }
          }
        }
      }
    }
  `;
  return await fetchGraphQL<TrangChuData>(query);
}
