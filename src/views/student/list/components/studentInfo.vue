<template>
  <div>
    <form>
      <table width="800" cellspacing="1" border="0" align="center">
        <tbody>
          <tr>
            <td class="tableHead" height="35" bgcolor="#D9F0FF" align="center">修改学生信息</td>
          </tr>
          <tr>
            <td>
              <table cellspacing="0" cellpadding="0" border="2" align="center">
                <tbody>
                  <tr height="35">
                    <td width="12%" align="center">姓名</td>
                    <td width="38%" bgcolor="#FFFFFF" align="center">{{dataForm.name}}</td>
                    <td width="12%" height="35" align="center">学号</td>
                    <td bgcolor="#FFFFFF" align="center">{{dataForm.stuNum}}</td>
                  </tr>
                  <tr>
                    <td width="12%" height="40" align="center">学院</td>
                    <td bgcolor="#FFFFFF" align="center">{{dataForm.departmentName}}</td>
                    <td width="6%" height="40" align="center">专业</td>
                    <td bgcolor="#FFFFFF" align="center">{{dataForm.specialName}}</td>
                  </tr>
                  <tr height="35">
                    <td width="7%" align="center">年级</td>
                    <td bgcolor="#FFFFFF" align="center">{{dataForm.grade}}</td>
                    <td width="7%" align="center">资助类型</td>
                    <td bgcolor="#FFFFFF" align="center">{{dataForm.imburseTypeName}}</td>
                  </tr>
                  <tr height="50">
                    <td width="7%" align="center">联系方式</td>
                    <td bgcolor="#FFFFFF" align="center">
                      <el-input v-model="dataForm.contact" style="width: 60%;" size="small"></el-input>
                    </td>
                    <td width="7%" align="center">地址</td>
                    <td bgcolor="#FFFFFF" align="center">
                      <el-select v-model="dataForm.campus">
                        <el-option :value="true" label="净月校区"></el-option>
                        <el-option :value="false" label="本部校区"></el-option>
                      </el-select>
                    </td>
                  </tr>
                  <tr height="50">
                    <td width="7%" align="center">服装账户余额</td>
                    <td bgcolor="#FFFFFF" align="center">
                      <el-input v-model="dataForm.balanceFuzhuang" style="width: 60%;" size="small">
                        <span slot="suffix" class="el-input__icon">元</span>
                      </el-input>
                    </td>
                    <td width="7%" align="center">日用品账户余额</td>
                    <td bgcolor="#FFFFFF" align="center">
                      <el-input v-model="dataForm.balanceRiyong" style="width: 60%;" size="small">
                        <span slot="suffix" class="el-input__icon">元</span>
                      </el-input>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr class="button-group">
            <td colspan="2" height="25" align="center">
              <el-button type="primary" @click="submit">提交</el-button>
              <el-button type="info" @click="cancel">取消</el-button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
</template>

<script>
import { updateStudentInfo } from "../../../../api/student";
export default {
  data() {
    return {};
  },
  props: {
    dataForm: Object
  },
  methods: {
    cancel() {
      this.$emit("cancel");
    },
    submit() {
      this.$confirm("是否要修改学生信息", "提示").then(() => {
        updateStudentInfo(this.dataForm);
        location.reload();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.suffix {
  height: 100%;
}
table,
table tr th,
table tr td {
  border: 1px solid #0094ff;
}
table {
  border-collapse: collapse;
  padding: 2px;
}
.button-group {
  height: 70px;
}
</style>