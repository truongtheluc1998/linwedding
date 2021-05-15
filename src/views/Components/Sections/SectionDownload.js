/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// core components
import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>WELLCOME LIN WEEDING 👰🏼👸🏼</h2>
            <h4>
            TUYỂN SINH KHOÁ MAKEUP THÁNG 3

Hiện tại có rất nhiều bạn muốn học khoá makeup bên mình nên mình sẽ bắt đầu nhận học viên tháng 3 ngay bây giờ 🥰🥰

💄 #GIẢM_GIÁ NHÂN DỊP KHAI TRƯƠNG dành cho 5 bạn đầu tiên 
  
💄#TẶNG ngay #KHOÁ_TÓC miễn phí 

                 LIN _MAKEUP_ACADEMY

📌 Ngoài những bài học makeup với các tone đang là hot trend trên thị trường làm đẹp hiện nay, các em còn được học & hướng dẫn: 
        👉🏻 Cách “Set-up Đèn” thế nào để ánh sáng bật lên tone makeup ko bị lóa & out nét makeup❗️
        👉🏻  Cách “Chụp Ảnh & Xử Lý Ảnh” làm sao lên hình ảnh đẹp nhất❗

❌❌❌ Tháng 12,01 là cơ hội để các bạn học & tỏa sáng cho mùa cưới 2020 năm nay cùng team mình nhé

🦋 Luôn chỉ & dẫn dắt các bạn cập nhật xu hướng hot trend mang tính thời đại, hướng học viên đến sự hoàn hảo trong cách thực hiện đến hình ảnh sản phẩm. 
🦋 Định hướng goute thẩm mĩ tinh tế! 
🦋 Luôn đảm bảo phát triển cân bằng 2 yếu tố Makeup & Hair để tạo ra những sản phẩm hoàn hảo! 
🦋 Ưu đãi dành riêng cho học viên bên LIN sẽ được mua Mỹ phẩm với giá sỉ 

               CHUYÊN ĐÀO TẠO HỌC VIÊN 
👉 Khoá makeup chuyên nghiệp 
👉 khoá makeup căn bản 
👉 khoá makeup cá nhân 
👉 khoá makeup nâng cao 

📌 Địa chỉ : Khu dân cư thuận giao 
☎️ 0961462546

CHỌN ĐÚNG NGƯỜI DẪN ĐẦU CŨNG LÀ MỘT KHỞI ĐẦU THÀNH CÔNG 🥰🥰
            </h4>
          </GridItem>
          <GridItem xs={12} sm={8} md={6}>
            <Button
              color="primary"
              size="lg"
              href="https://www.google.com/maps/place/LIN+Wedding/@10.9613805,106.7109373,17z/data=!3m1!4b1!4m5!3m4!1s0x3174d7b4243136eb:0x47837cd2d01fcfbd!8m2!3d10.9613805!4d106.713126?hl=vi-VN"
              target="_blank"
            >
              GOOGLE MAP LIN WEDDING
            </Button>
            <Button
              color="primary"
              size="lg"
              href="https://www.facebook.com/videocall/incall/?peer_id=100008496784219&call_id=363545880&is_caller=true&audio_only=true&nonce=iq9l0sqauug7&initialize_video=false"
              target="_blank"
            >
              HOTLINE: 0878888628
            </Button>
          </GridItem>
        </GridContainer>
        <br />
        <div className={classes.textCenter + " " + classes.sharingArea}>
          <GridContainer justify="center">
            <h3>Thank you for supporting us!</h3>
          </GridContainer>
          <Button color="twitter">
            <i className={classes.socials + " fab fa-twitter"} /> Tweet
          </Button>
          <Button color="facebook" href="https://www.facebook.com/profile.php?id=100008496784219">
            <i className={classes.socials + " fab fa-facebook-square"} /> Share
          </Button>
          <Button color="google" href ="https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
            <i className={classes.socials + " fab fa-google-plus-g"} />
            Share
          </Button>
          <Button color="github">
            <i className={classes.socials + " fab fa-github"} /> Star
          </Button>
        </div>
      </div>
    </div>
  );
}
