<template>
	<div class="big-box">
		<div class="icons-box">
			<button class="icons">
				<div class="bold-icon"></div>
			</button>
		</div>
		<div class="text-box">
			<!-- <div class="text-optitional"></div> -->
			<!-- <textarea class="text-box" placeholder="Text (optional)"> </textarea> -->
			<span class="text-optitional">Text (optional)</span>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
div {
	display: block;
}
.big-box {
	margin: 16px;
	border: 1px solid #edeff1;
	border-radius: 4px;
	position: relative;
}
.icons-box {
	z-index: 8;
	height: 42px;
	align-items: center;
	background-color: #f6f7f8;
	border-radius: 3px 3px 0 0;
	border-radius: 4px;
	box-sizing: border-box;
	display: flex;
	flex-wrap: nowrap;
}
.text-box {
	overflow: auto;
	border-radius: 4px;
	font-family: 'Noto Sans', Arial, sans-serif;
	min-height: 122px;
	overflow: hidden;
	padding: 8px 16px;
	resize: vertical;
	-webkit-user-modify: read-write-plaintext-only;
	outline: none;
	user-select: text;
	white-space: pre-wrap;
	overflow-wrap: break-word;
	width: 100%;
	font-size: 14px;
	font-weight: 400;
	line-height: 21px;
	z-index: 11;
	position: relative;
}

.big-box:focus-within {
	border: 0.5px solid black;
}

.text-optitional {
	position: absolute;
	content: 'Text (optional)';
	cursor: text;
	top: 1px;
	font-family: 'Noto Sans', Arial, sans-serif;
	font-size: 14px;
	font-weight: 70;
	line-height: 30px;
	color: #6c6e70;
	font-family: inherit;
}
.icons {
	align-items: center;
	box-sizing: border-box;
	display: -ms-flexbox;
	display: flex;
	line-height: 0;
	outline: none;
	padding: 4px;
	position: relative;
	transition: background-color 0.1s;
	margin-left: 5px;
}

.bold-icon {
	/*content: ; url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtNDMxLjkzIDM2NC4zNWMxMS4yMTEtMTUuMDkgMTYuNDEtMzMuODA5IDE0LjU5LTUyLjUyLTEuODIwMy0xOC43MDctMTAuNTMxLTM2LjA3LTI0LjQzOC00OC43MTktMTMuOTA2LTEyLjY0OC0zMi4wMi0xOS42NzItNTAuODE2LTE5LjcxNWgtOTQuNzE1djI2NS4yMWgxMjMuMTNjMjMuMDk4LTAuMDU4NTk0IDQ0LjkwNi0xMC42NDUgNTkuMjM0LTI4Ljc1NCAxNC4zMzItMTguMTA5IDE5LjYyMS00MS43NyAxNC4zNjctNjQuMjU4LTUuMjUzOS0yMi40OTItMjAuNDc3LTQxLjM1NS00MS4zNTItNTEuMjQyem0tMTE3LjQ5LTgzLjA2Nmg1Ni44MjhjMTMuNTM1IDAgMjYuMDQzIDcuMjIyNyAzMi44MTIgMTguOTQxIDYuNzY1NiAxMS43MjMgNi43NjU2IDI2LjE2OCAwIDM3Ljg4Ny02Ljc2OTUgMTEuNzIzLTE5LjI3NyAxOC45NDUtMzIuODEyIDE4Ljk0NWgtNTYuODI4em04NS4yNDIgMTg5LjQzaC04NS4yNDJ2LTc1Ljc3M2g4NS4yNDJjMTMuNTM1IDAgMjYuMDQzIDcuMjE4OCAzMi44MTIgMTguOTQxIDYuNzY1NiAxMS43MjMgNi43NjU2IDI2LjE2NCAwIDM3Ljg4Ny02Ljc2OTUgMTEuNzIzLTE5LjI3NyAxOC45NDUtMzIuODEyIDE4Ljk0NXoiIGZpbGw9IiM2NzY3NjciLz4KPC9zdmc+Cg==);*/
}
.link-icon {
}
button {
	display: flex;
	align-items: center;
	width: 32px;
	height: 32px;
	background-color: #dae0e6;
	border-radius: 4px;
}
</style>
