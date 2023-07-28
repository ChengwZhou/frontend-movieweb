<template>
    <div class="t">
        <div class="model-container">
            <h4 class="model-title" style="order: 2;">R Models</h4>
            <h4 class="model-title" style="order: 1;">S Models</h4>
        </div>
        <div class="table-container">
            <table>
                <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
                <td v-for="(cell, cellIndex) in row.cells" :key="cellIndex">
                    {{ cell.text }}
                    <input type="checkbox" v-model="cell.selected">
                </td>
                </tr>
            </table>
        </div>
    </div>
</template>
  

<script>
export default {
    name: 'SelecTable',
    data() {
        return {
            rows: [
                {cells: [{text: 'R1', selected: false}, {text: 'S1', selected: false}]},
                {cells: [{text: 'R2', selected: false}, {text: 'S2', selected: false}]},
                {cells: [{text: 'R3', selected: false}, {text: 'S3', selected: false}]},
                {cells: [{text: 'R4', selected: false}, {text: 'S4', selected: false}]},
            ],
        };
    },
};
</script>

<style>
.model-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.model-title {
    margin: 3rem 10rem 2rem;
}

.model-title:last-child {
  margin-right: 0;
}

.table-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh; /* Adjust this value as needed */
}

table {
  width: 30%; /* 让表格宽度填满容器 */
  text-align: center; /* 水平居中 */
}

table td {
  vertical-align: middle; /* 垂直居中 */
}
</style>

