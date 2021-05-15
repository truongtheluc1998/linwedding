import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <h3>Introduce</h3>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h3>
                <small>Nguyễn Thị Mỹ Linh</small>
              </h3>
              <CustomTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: "Profile",
                    tabIcon: Face,
                    tabContent: (
                      <h4 className={classes.textCenter}>
                        Nghề nghiệp: Makeup - Artist
                      </h4>
                    ),
                  },
                  {
                    tabName: "Liên hệ",
                    tabIcon: Chat,
                    tabContent: (
                      <h4 className={classes.textCenter}>
                        SDT: 0878888628 && 0878888398
                      </h4>
                    ),
                  },
                  {
                    tabName: "LIN wedding",
                    tabIcon: Build,
                    tabContent: (
                      <p className={classes.textCenter}>
                        Nhận đào tạo học viên : Makeup, trang điểm cô dâu.
                      </p>
                    ),
                  },
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <h3>
                <small>Lê Quốc Hùng</small>
              </h3>
              <CustomTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: "Profile",
                    tabIcon: Face,
                    tabContent: (
                      <h4 className={classes.textCenter}>
                        Nghề nghiệp: Studio - Chỉnh sửa ảnh.
                      </h4>
                    ),
                  },
                  {
                    tabName: "Liên hệ",
                    tabIcon: Chat,
                    tabContent: (
                      <h4 className={classes.textCenter}>
                        SDT: 0878888628 && 0878888398
                      </h4>
                    ),
                  },
                  {
                    tabName: "LIN wedding",
                    tabIcon: Build,
                    tabContent: (
                      <p className={classes.textCenter}>
                        Chụp hình cưới, trọn gói.
                      </p>
                    ),
                  },
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
