import * as React from "react";
import { toast } from "sonner";
import Layout from "../component/Layout";

import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Collapse from "@mui/material/Collapse";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function SimpleCollapse() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
    toast.success("Toggled collapse!");
  };

  const icon = (
    <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
      <svg width="100" height="100">
        <polygon
          points="0,100 50,0 100,100"
          style={{ fill: "white", stroke: "#ccc", strokeWidth: 1 }}
        />
      </svg>
    </Paper>
  );

  return (
    <Layout>
      <Box sx={{ height: 300, p: 3 }}>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Show"
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            mt: 3,
          }}
        >
          <div>
            <Collapse in={checked}>{icon}</Collapse>
            <Collapse in={checked} collapsedSize={40}>
              {icon}
            </Collapse>
          </div>

          <div>
            <Box sx={{ width: "120px" }}>
              <Collapse orientation="horizontal" in={checked}>
                {icon}
              </Collapse>
            </Box>

            <Box sx={{ width: "120px", mt: 2 }}>
              <Collapse
                orientation="horizontal"
                in={checked}
                collapsedSize={40}
              >
                {icon}
              </Collapse>
            </Box>
          </div>
        </Box>
      </Box>
    </Layout>
  );
}