// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        target: {
            default: null,
            type: cc.Node
        },
        speed: 10,
        breath_bar: {
            default: null,
            type: cc.Node
        },
        breath_location: {
            default: null,
            type: cc.Node
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    update(dt) {
        this.breath_location.getParent().convertToWorldSpaceAR(this.target.getPosition())
        var progress = this.breath_bar.getComponent(cc.ProgressBar).progress
        var dx = this.target.x - this.node.x;
        var dy = this.target.y - this.node.y;
        var mx = dx * dt;
        var my = dy * dt;
        if (progress < 0.75 && dy < 0) {
            my = my * progress
        }
        if (this.node.y + my < this.breath_location.y) {
            this.node.x += mx;
            this.node.y += my;
        }
       
    },
});