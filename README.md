# Angular Mask Money for AngularJS 1.x
AngularJs directive for jquery.maskMoney.js (https://github.com/plentz/jquery-maskmoney)

**$watch** for ng-model:
`Change`
`Add`
`Remove`

## Usage:
insert js in your projetct:
```
<script src="node_modules/jquery-maskmoney/src/jquery.maskMoney.js"></script> 
<script src="assets/js/directives/mask-money.js"></script>
```

## Development
```<input type="text" mask-money>```

#### Custom options:
```<input type="text" mask-money="{prefix: 'R$ '}" ng-model="vm.price">```

#### Custom options (listener):
```<input type="text" mask-money="vm.optsMaskMoney" ng-model="vm.price">```

in controller **.js**
```
vm.optsMaskMoney = {
  prefix: '',
  suffix: '',
  affixesStay: true,
  thousands: '.',
  decimal: ',',
  precision: 2,
  allowZero: true,
  allowNegative: false
};
```

#### Requires **ngModel**

