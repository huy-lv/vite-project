import React from "react";
import { Title } from "./components/Title";
import { Button } from "@mui/material";

export const App = ({ name = "World" }) => {
  const TopItems = [
    {
      icon: Icon.icon_dhtc,
      title: "Doanh thu cá nhân",
      value: user?.mySale,
      isMoney: true
    },
    {
      icon: Icon.icon_hhtt,
      title: "Hoa hồng tạm tính",
      value: teamReport?.totalCommission,
      isMoney: true
    },
    {
      icon: Icon.icon_dhtc,
      title: "Đơn hàng thành công",
      value: teamReport?.totalOrderSuccess
    },
    {
      icon: Icon.icon_hhdd,
      title: "Hoa hồng đã duyệt",
      value: teamReport?.totalCommissionSuccess,
      isMoney: true
    }
  ];

  return (
    <Grid container spacing={2} style={{ marginTop: 0 }}>
      {TopItems.map((item, index) => (
        <Grid item xs={6} key={String(index)}>
          <Box
            sx={{
              display: "flex",
              borderRadius: "10px",
              gap: 1,
              backgroundColor: "#FFFFFF",
              boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)"
            }}
            p={1}
            alignItems="center"
            justifyItems="center"
          >
            <img
              height={55}
              width={55}
              style={{ padding: 8 }}
              src={item.icon}
              alt=""
            />
            <div>
              <Typography
                style={{
                  color: theme.palette.primary.main,
                  fontSize: 12,
                  fontWeight: 700
                }}
              >
                {item.title}
              </Typography>
              <Typography style={{ fontSize: 14, fontWeight: 700 }}>
                {item.isMoney ? formatPrice(item.value || 0) : item.value}
              </Typography>
            </div>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
